import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
    const isAuthenticated = false;

    return (
        <>
            {isAuthenticated
                ? <Navigate to="/" />
                : <>
                    <section className="flex flex-1 flex-col items-center justify-center py-10">
                        <Outlet />
                    </section>

                    <img
                        src="assets/images/side-img.svg"
                        alt="sidebar illustration"
                        className="hidden lg:block h-full w-1/2 object-cover"
                    />
                </>
            }
        </>
    )
}

export default AuthLayout