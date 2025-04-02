import Table from "../components/Table";

export default function Client() {

    const columns = [
        { head: '#', accessor: 'name' },
        { head: 'Email', accessor: 'email' },
        { head: 'Phone Number', accessor: 'phone' },
        { head: 'Regularity', accessor: 'regularity' },
    ]
    
    const data = [
        {name:'John', email:'john@gmail.com', phone:'1234567890', regularity:'Weekly'},
        {name:'Mary', email:'mary@gmail.com', phone:'1234567890', regularity:'Monthly'},
    ];

    const editColumn = (row: any, index: number) => {
        console.log('Edit clicked: ', row, ' : ', index);
    }

    return (
        <>
        <div className="flex width-full justify-center flex-col">
        <h1>Client</h1>
        <Table columns={columns} data={data} onEdit={editColumn}/>
        </div>
        </>
    )
}