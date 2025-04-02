export default function Home() {
    return (
        <>
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-3xl font-bold">
                Home!
            </h1>
            <div className="flex flex-col gap-1 mt-1">
                <a href="./client">Client</a>
                <a href="./sessions">Sessions</a>
                <a href="./therapists">Therapist</a>
            </div>
        </div>
        </>
    )
}