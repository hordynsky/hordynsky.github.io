const Mutations = {
    async creatItem(parent, args, ctx, info){
        const item =  ctx.db.mutation.createItem({
            data: {
                ...args
            }
        }, info)
    }
};

module.exports = Mutations;
