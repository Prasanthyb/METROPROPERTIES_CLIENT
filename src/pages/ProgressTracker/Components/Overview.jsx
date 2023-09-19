import React from "react";
import Styles from "./Overview.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function Overview() {
  return (
    <div className={Styles.overviewContainer}>
      <div className={Styles.helpRequestsContainer}>
        <div className={Styles.helpRequestsHeader}>
          <h1>HELP REQUESTS</h1>
        </div>
        <div className={Styles.helpRequestMarkReply}>
          <p>
            <FontAwesomeIcon icon={faReply} className={Styles.faIcon} />
            REPLY
          </p>
          <p>
            <FontAwesomeIcon icon={faCheck} className={Styles.faIcon} />
            MARK AS DONE
          </p>
        </div>




        <div className={Styles.individualRequestsContainer}>
{/* Student request */}
          <div className={Styles.individualRequests}>
          <input type="checkbox" id="Checkbox" name="Checkbox" value="checkboxValue" />

            <div className={Styles.individualStudent}>
              <div className={Styles.studentImgContainer}>
              <img src="/images/students/AidenAndrews.png" alt="Student profile" />
              <p>STUDENT needs help with their project</p>
              </div>

              <div className={Styles.dateTimeContainer}>
                <p>Date</p>
                <p>Time</p>
              </div>
            </div>

          </div>

          {/* ------------------- */}

{/* Student request */}
          <div className={Styles.individualRequests}>
          <input type="checkbox" id="Checkbox" name="Checkbox" value="checkboxValue" />

            <div className={Styles.individualStudent}>
              <div className={Styles.studentImgContainer}>
              <img src="/images/students/AliceKindellan.png" alt="Student profile" />
              <p>STUDENT needs help with their project</p>
              </div>

              <div className={Styles.dateTimeContainer}>
                <p>Date</p>
                <p>Time</p>
              </div>
            </div>

          </div>
{/* ------------------- */}

{/* Student request */}
          <div className={Styles.individualRequests}>
          <input type="checkbox" id="Checkbox" name="Checkbox" value="checkboxValue" />

            <div className={Styles.individualStudent}>
              <div className={Styles.studentImgContainer}>
              <img src="/images/students/CourtneyBristol.png" alt="Student profile" />
              <p>STUDENT needs help with their project</p>
              </div>

              <div className={Styles.dateTimeContainer}>
                <p>Date</p>
                <p>Time</p>
              </div>
            </div>

          </div>
{/* ------------------- */}

{/* Student request */}
          <div className={Styles.individualRequests}>
          <input type="checkbox" id="Checkbox" name="Checkbox" value="checkboxValue" />

            <div className={Styles.individualStudent}>
              <div className={Styles.studentImgContainer}>
              <img src="/images/students/HanuNepe.png" alt="Student profile" />
              <p>STUDENT needs help with their project</p>
              </div>

              <div className={Styles.dateTimeContainer}>
                <p>Date</p>
                <p>Time</p>
              </div>
            </div>
          </div>
{/* ------------------- */}

{/* Student request */}

          <div className={Styles.individualRequests}>
          <input type="checkbox" id="Checkbox" name="Checkbox" value="checkboxValue" />

            <div className={Styles.individualStudent}>
              <div className={Styles.studentImgContainer}>
              <img src="/images/students/HarryMcGrath.png" alt="Student profile" />
              <p>STUDENT needs help with their project</p>
              </div>

              <div className={Styles.dateTimeContainer}>
                <p>Date</p>
                <p>Time</p>
              </div>
            </div>
          </div>
{/* ------------------- */}

{/* Student request */}

          <div className={Styles.individualRequests}>
          <input type="checkbox" id="Checkbox" name="Checkbox" value="checkboxValue" />

            <div className={Styles.individualStudent}>
              <div className={Styles.studentImgContainer}>
              <img src="/images/students/JavierFuego.png" alt="Student profile" />
              <p>STUDENT needs help with their project</p>
              </div>

              <div className={Styles.dateTimeContainer}>
                <p>Date</p>
                <p>Time</p>
              </div>
            </div>
          </div>
{/* ------------------- */}

{/* Student request */}

          <div className={Styles.individualRequests}>
          <input type="checkbox" id="Checkbox" name="Checkbox" value="checkboxValue" />

            <div className={Styles.individualStudent}>
              <div className={Styles.studentImgContainer}>
              <img src="/images/students/LisaHoran.png" alt="Student profile" />
              <p>STUDENT needs help with their project</p>
              </div>

              <div className={Styles.dateTimeContainer}>
                <p>Date</p>
                <p>Time</p>
              </div>
            </div>
          </div>
{/* ------------------- */}

{/* Student request */}

          <div className={Styles.individualRequests}>
          <input type="checkbox" id="Checkbox" name="Checkbox" value="checkboxValue" />

            <div className={Styles.individualStudent}>
              <div className={Styles.studentImgContainer}>
              <img src="/images/students/LuciaMendez.png" alt="Student profile" />
              <p>STUDENT needs help with their project</p>
              </div>

              <div className={Styles.dateTimeContainer}>
                <p>Date</p>
                <p>Time</p>
              </div>
            </div>
          </div>
{/* ------------------- */}

{/* Student request */}

          <div className={Styles.individualRequests}>
          <input type="checkbox" id="Checkbox" name="Checkbox" value="checkboxValue" />

            <div className={Styles.individualStudent}>
              <div className={Styles.studentImgContainer}>
              <img src="/images/students/MarkOLeary.png" alt="Student profile" />
              <p>STUDENT needs help with their project</p>
              </div>

              <div className={Styles.dateTimeContainer}>
                <p>Date</p>
                <p>Time</p>
              </div>
            </div>
          </div>
{/* ------------------- */}

        </div>
      </div>
    </div>
  );
}
