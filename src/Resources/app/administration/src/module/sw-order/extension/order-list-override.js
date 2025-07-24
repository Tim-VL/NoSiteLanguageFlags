const { Component } = Shopware;

Component.override('sw-order-list', {
    computed: {
        columns() {
            const columns = this.$super('columns');

            columns.push({
                property: 'orderLanguage',
                label: this.$tc('sw-order.list.columnLanguage'),
                rawData: true,
                sortable: false
            });

            return columns;
        }
    },

    methods: {
        getOrderRowClass(order) {
            const baseClass = this.$super('getOrderRowClass', order) || '';

            if (order.language?.locale?.code === 'en-GB') {
                return `${baseClass} order-language-english-row`;
            }

            return baseClass;
        },

        getListCriteria() {
            const criteria = this.$super('getListCriteria');
            criteria.addAssociation('language.locale');
            return criteria;
        }
    }
});
