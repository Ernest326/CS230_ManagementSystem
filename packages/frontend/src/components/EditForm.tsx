import React from "react";

type Column = {
    head: string;
    accessor: string;
}

type EditFormProps = {
    columns: Column[];
    initialData: Record<string, any>;
    onSubmit: (data: Record<string, any>) => void;
    onCancel: () => void;
    onDelete: () => void;
}

const EditForm: React.FC<EditFormProps> = ({columns, initialData, onSubmit, onCancel, onDelete}) => {

    const [formData, setFormData] = React.useState<Record<string, any>>(initialData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-lg">
            {columns.map((col, index) => (
                <div key={index} className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={col.accessor}>
                        {col.head}
                    </label>
                    <input
                        type="text"
                        name={col.accessor}
                        value={formData[col.accessor] || ""}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
            ))}
            <div className="flex items-center justify-between">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Submit
                </button>
                <button type="button" onClick={onCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Cancel
                </button>
                <button type="button" onClick={onDelete} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                    Delete
                </button>
            </div>
        </form>
    );
}
    
export default EditForm;