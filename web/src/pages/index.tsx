import { NavBar } from "../components/NavBar";
import { withApollo } from "../utils/withApollo";

const Index = () => (
  <>
    <NavBar />
    <div>hello world</div>
  </>
);

export default withApollo({ ssr: true })(Index);
