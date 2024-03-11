import Header1 from "../Navbar/header1";
import UseMemoExample from "../functional-components/hooks/useMemo/useMemoExample";
import ParentMemo from "../functional-components/memo/parent";

const SettingPage=()=>{
    return(
        <>
        <Header1/>
        <h1>Setting Page</h1>
        <ParentMemo/>
        </>
    )
}
export default SettingPage;