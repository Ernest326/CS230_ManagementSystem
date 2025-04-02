export default function Home() {
    return (
        <>
        <div class="flex flex-col items-center justify-center h-screen">
            <h1 class="text-3xl font-bold">
                Home!
            </h1>
            <div class="flex flex-col gap-1 mt-1">
                <a href="./client">Client</a>
                <a href="./sessions">Sessions</a>
                <a href="./therapist">Therapist</a>
            </div>
        </div>
        </>
    )
}