const database = require('../services/database');
const router = require("express").Router();

router.post("/", async (req, res) => {

    try {
        const { zone, organization_id, total_distance, item_type } = req.body;

        const query = await database.pool.query(`
                SELECT
                    p.base_distance_in_km,
                    p.km_price,
                    p.fixed_price
                FROM
                    price p
                JOIN
                    item i ON p.item_id = i.id
                WHERE
                    i.type = '${item_type}'
                    AND p.organization_id = ${organization_id}
                    AND p.zone = '${zone}'`);
        const base_distance_in_km = query.rows[0].base_distance_in_km;
        const km_price = query.rows[0].km_price; 
        const fixed_price = query.rows[0].fixed_price; 
        
        if(total_distance>base_distance_in_km) {
            const extra_km = total_distance - base_distance_in_km;
            const cost = (base_distance_in_km * fixed_price) + (extra_km * km_price);
            return res.status(200).json({ cost: cost });
        } else {
            return res.status(200).json({ cost: base_distance_in_km * fixed_price });
        }

    }

    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;