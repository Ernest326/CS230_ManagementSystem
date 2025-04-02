import Table from "../components/Table";

export default function Sessions() {

    const columns = [
        { head: '#', accessor: 'therapist' },
        { head: 'Client', accessor: 'client' },
        { head: 'Notes', accessor: 'notes' },
        { head: 'Data', accessor: 'data' },
        { head: 'Length', accessor: 'length' }
    ]
    
    const data = [
        {name:'Dr. White', client: 'John', notes:'Good session', data:'2023-10-01', length:'1h'},
    ];

    const editColumn = (row: any, index: number) => {
        console.log('Edit clicked: ', row, ' : ', index);
    }

    return (
        <>
        <div className="flex width-full justify-center flex-col">
        <h1>Sessions</h1>
        <Table columns={columns} data={data} onEdit={editColumn}/>
        </div>
        </>
    )
}