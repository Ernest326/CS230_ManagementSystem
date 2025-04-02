import { useEffect, useState } from "react";
import Table from "../components/Table";
import axios from "axios";

export default function Client() {

    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/clients');
                console.log(response.data);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const columns = [
        { head: '#', accessor: 'name' },
        { head: 'Email', accessor: 'email' },
        { head: 'Phone Number', accessor: 'phone' },
        { head: 'Regularity', accessor: 'regularity' },
    ]

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