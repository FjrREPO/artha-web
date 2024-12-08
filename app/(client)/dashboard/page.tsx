import DashboardPage from "./_components/DashboardPage";

export default function page() {
    return (
        <div className="w-full flex flex-1 px-5 sm:px-10 lg:px-20 items-center">
            <div className="w-full h-full flex xl:max-w-screen-xl lg:max-w-screen-lg mx-auto justify-center">
                <DashboardPage />
            </div>
        </div>
    )
}