import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const PaymentHistory = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    const {data: payments = []} = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/payments/${user?.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <SectionTitle heading='Payment History' subHeading='Make Simple' />
            <h3>Total Payments: {payments.length}</h3>
        </div>
    );
};

export default PaymentHistory;