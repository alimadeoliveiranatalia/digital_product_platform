import { useQuery } from "@apollo/client";
import { getAccessToken, useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { withApollo } from "../../lib/withApollo";


function Home() {
    const { user } = useUser();
    const { data, loading, error } = useQuery(PRODUCTS_QUERY);
    return (
        <div>
            <h2>Hello Usuário</h2>
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
        </div>
    )
}
export const getServerSideProps = withPageAuthRequired({
    getServerSideProps: async ({ req, res }) => {
        console.log(getAccessToken(req,res));
        return {
            props: {}
        }
    }
});
export default withApollo(Home);