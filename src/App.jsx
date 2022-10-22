import { Routes, Route } from "react-router-dom";
import { Navbar, Modal, ProtectedRoute, AdminRoute } from "./components";
import {
	Home,
	OrderHistory,
	Cart,
	ResetPassword,
	NotFound,
	Admin,
	AllProducts,
	Contact,
} from "./pages";
import { ToastContainer } from "react-toastify";

const App = () => {
	return (
		<>
			<ToastContainer position="bottom-right" autoClose={4000} closeOnClick />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="/my-orders"
					element={
						<ProtectedRoute>
							<OrderHistory />
						</ProtectedRoute>
					}
				/>
				<Route path="/cart" element={<Cart />} />
				<Route path="/reset" element={<ResetPassword />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/all" element={<AllProducts />} />
				{/* ADMIN ROUTES */}
				<Route
					path="/admin/*"
					element={
						<AdminRoute>
							<Admin />
						</AdminRoute>
					}
				/>

				{/* 404 routes */}
				<Route path="/*" element={<NotFound />} />
			</Routes>
			<Modal />
		</>
	);
};

export default App;
