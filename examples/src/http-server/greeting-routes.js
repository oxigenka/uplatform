const { createRouter } = require('@uplatform/http');
const router = createRouter();

const { sql } = up.pg;

router.get(
    '/hello',
    async (request, reply) => {
        const users = await sql`
            select *
            from users
            where company_id = ${companyId}
        `;

        reply.json({ users });
    },
);

module.exports = router;
