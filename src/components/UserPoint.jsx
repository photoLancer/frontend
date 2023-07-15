import "./profile.css";

const UserPoint=()=>{
    return(
    <>
    <div class="point">
            <div class="pointcheck">
                <span>Your Point</span>
                <div class="mypoint"></div>
            </div>
            <div class="chargingBox">
                <nav class="option">
                    <a class="select" value="exchange" href="#">Exchange</a>
                    <a class="select" value="charge" href="#">Charge</a>
                    <a class="select" value="tradelog" href="#  ">Trade log</a>
                </nav>
                <div class="tradeLogcheck">
                    <span>User's Trade log</span>
                    <div class="tradeLog"></div>
                </div>
            </div>
    </div>
    </>
    );
}
export default UserPoint;