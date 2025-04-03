import Table from "../components/Table";
import EditForm from "../components/EditForm";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function Sessions() {
    const [data, setData] = useState<any[]>([]);
    const [edit, setEdit] = useState(false);
    const [newData, setNewData] = useState(false);
    const [editData, setEditData] = useState<any>({});

    const navigate = useNavigate();

    const columns = [
        { head: 'Therapist ID', accessor: 'therapist_id' },
        { head: 'Client ID', accessor: 'client_id' },
        { head: 'Notes', accessor: 'notes' },
        { head: 'Date', accessor: 'session_date' },
        { head: 'Length', accessor: 'length' }
    ]

    const endpoint = 'http://localhost:3000/sessions';
    const primaryKey = 'session_id';

    //Get all elements
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(endpoint);
            console.log(response.data);
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    //Edit element + Create element
    const handleEdit = async (row: any) => {
        if(newData) {
            try {
                console.log('Create: ', row);
                const response = await axios.post(endpoint, row);
                console.log('Create: ', response.data);
            } catch (error) {
                alert('Error creating data: ' + error);
            }
        } else {
            const target = editData[primaryKey];
            try {
                const response = await axios.put(`${endpoint}/${target}`, row);
                console.log('Edit: ', response.data);
            } catch (error) {
                alert('Error editing data: ' + error);
            }
        }
        setEdit(false);
        fetchData();
    }

    //Delete element
    const handleDelete = async () => {
        const target = editData[primaryKey];
        try {
            const response = await axios.delete(`${endpoint}/${target}`);
            console.log('Delete: ', response.data);
        } catch (error){
            alert('Error deleting data: ' + error);
        }
        setEdit(false);
        fetchData();
    }

    //Edit column
    const editColumn = (row: any, index: number) => {
        setEditData(row);
        setEdit(true);
        setNewData(false);
    }

    //Create column
    const makeColumn = () => {
        setEditData({});
        setEdit(true);
        setNewData(true);
    }

    return (
        <>
        {!edit?
        <>
        <div className="mx-20 flex width-full justify-center flex-col">
        <h1 className="mt-5 bold text-center text-6xl">Sessions</h1>
        <div className="mt-5 mb-2 flex-col">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 mr-2 rounded"
            onClick={()=>{navigate('/')}}>Go Back</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
            onClick={makeColumn}>Add Session</button>
        </div>
        <Table columns={columns} data={data} onEdit={editColumn}/>
        </div>
        </>
        :
        <>
        <div className="mx-50 flex width-full h-screen justify-center flex-col">
        <EditForm columns={columns} initialData={editData} onSubmit={(data) => {handleEdit(data); setEdit(false); setNewData(false);}}
        onCancel={() => {setEdit(false);}}
        onDelete={()=>handleDelete()}/>
        </div>
        </>}
        </>
    )
}