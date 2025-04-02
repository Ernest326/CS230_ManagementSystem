import Table from "../components/Table";

export default function Therapist() {

    const columns = [
        { head: '#', accessor: 'title' },
        { head: 'Name', accessor: 'name' },
        { head: 'Location', accessor: 'location' },
        { head: 'Years', accessor: 'years' },
        { head: 'Availability', accessor: 'availability' }
    ]
    
    const data = [
        {title:'Dr.', name:'White', location:'Dublin', years:'10', availability:'Monday-Friday'},
    ];

    const editColumn = (row: any, index: number) => {
        console.log('Edit clicked: ', row, ' : ', index);
    }

    return (
        <>
        <div className="flex width-full justify-center flex-col">
        <h1>Therapists</h1>
        <Table columns={columns} data={data} onEdit={editColumn}/>
        </div>
        </>
    )
}