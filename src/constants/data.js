import images from "./images"

const data = {
    user: {
        name: 'Amaro',
        img: images.avt
    },
    summary: [
        {
            title: 'Total Vendido',
            subtitle: 'Total vendido Hoje',
            value: '$1.000',
            percent: 70
        },
        {
            title: 'Data com mais vendas',
            subtitle: 'Data com mais movimento',
            value: '20/05',
            percent: 49
        },
        {
            title: 'Produtos Vencidos',
            subtitle: 'Produtos proximos da validade',
            value: 'Arroz do Amaro',
            percent: 38
        },
        {
            title: 'Extra',
            subtitle: 'Estoque em dia',
            value: '2345',
            percent: 55
        }
    ],
    revenueSummary: {
        title: 'Produtos mais Vendidos',
        value: 'Arroz do Amaro',
        chartData: {
            labels: ['May', 'Jun', 'July', 'Aug', 'May', 'Jun', 'July', 'Aug'],
            data: [300, 300, 280, 380, 200, 300, 280, 350]
        }
    },
    overall: [
        {
            value: '300K',
            title: 'Orders'
        },
        {
            value: '9.876K',
            title: 'Customers'
        },
        {
            value: '1.234K',
            title: 'Products'
        },
        {
            value: '$5678',
            title: 'Revenue'
        }
    ],
    revenueByChannel: [
        {
            title: 'Direct',
            value: 70
        },
        {
            title: 'External search',
            value: 40
        },
        {
            title: 'Referal',
            value: 60
        },
        {
            title: 'Social',
            value: 30
        }
    ],
    revenueByMonths: {
        labels: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
        data: [250, 100, 300, 280, 100, 220, 310, 190, 200, 120, 250, 350]
    }
}

export default data