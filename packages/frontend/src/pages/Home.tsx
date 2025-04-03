export default function Home() {
    return (
        <>
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold">
                Home
            </h1>
            <div className="flex flex-col gap-1 mt-1">
                <a href="./client" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 mr-2 rounded text-center">Client</a>
                <a href="./sessions" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 mr-2 rounded text-center">Sessions</a>
                <a href="./therapists" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 mr-2 rounded text-center">Therapist</a>
            </div>
        </div>
        </>
    )
}