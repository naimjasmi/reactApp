import { useState } from "react";
import { ACTIVITIES } from "./data/mockdata";
import { Activity } from "./data/models";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faPhone, faInfo, faCubes } from '@fortawesome/free-solid-svg-icons';
import "react-datepicker/dist/react-datepicker.css";

export default function Activities({ tajuk, kandungan }) {
    const [activities, setActivities] = useState(ACTIVITIES);
    const [editingActivity, setEditingActivity] = useState(null);
    const zeroPad = (num, places) => String(num).padStart(places, '0')

    function handleFormSubmit(ev) {
        ev.preventDefault();
        var newid = activities.length + 1;
        var newActivity = new Activity(
            newid,
            ev.target.activityID.value,
            ev.target.date.value,
            ev.target.weather.value,
            ev.target.workType.value,
            ev.target.workgroupID.value
        );

        setActivities([...activities, newActivity]);
        //reset form after submit
        ev.target.reset();
    }

    function deleteActivity(id) {
        if (window.confirm(`Are you sure you want to delete activity ${id}?`)) {
            const updatedActivities = activities.filter(activity => activity.work_id !== id);
            setActivities(updatedActivities);
        }
    }

    function handleEditClick(activity) {
        setEditingActivity(activity);
    }

    function handleEditFormSubmit(ev) {
        ev.preventDefault();
        const updatedActivity = new Activity(
            editingActivity.work_id,
            ev.target.activityID.value,
            ev.target.date.value,
            ev.target.weather.value,
            ev.target.workType.value,
            ev.target.workgroupID.value
        );

        const updatedActivities = activities.map(activity =>
            activity.work_id === updatedActivity.work_id ? updatedActivity : activity
        );

        // pop up edit confirmation
        if (window.confirm(`Are you sure you want to edit activity?`)) {
            setActivities(updatedActivities);
        }

        // close edit form
        setEditingActivity(null);
    }

    return (
        <div>
            <div className="topnav">
                <a href="/"> <FontAwesomeIcon icon={faHome} /> Home</a>
                <a href="/workgroup"> <FontAwesomeIcon icon={faUsers} /> Workgroup</a>
                <a href="/contact"><FontAwesomeIcon icon={faPhone} /> Contact</a>
                <a className="active" href="/activity"><FontAwesomeIcon icon={faCubes} /> Activity</a>
            </div>
            <div className="container">
                <header style={{ padding: '12px', textAlign: 'center' }}><h1>ACTIVITIES</h1></header>
                <div className="row g-3">
                    {activities.map(activity => (
                        <div className="col-md-6" key={activity.work_id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Activity ID: {activity.work_id}</h5>
                                    <p className="card-text">Date: {activity.date}</p>
                                    <p className="card-text">Weather: {activity.weather}</p>
                                    <p className="card-text">Work Type: {activity.work_type}</p>
                                    <p className="card-text">Workgroup ID: {activity.workgroup_id}</p>
                                    <button className="btn btn-primary" onClick={() => handleEditClick(activity)}>Edit</button>
                                    <button className="btn btn-danger mx-1" onClick={() => deleteActivity(activity.work_id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* edit activity form */}
                {editingActivity && (
                    <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit Activity</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setEditingActivity("")}></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleEditFormSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="activityID" className="form-label">Activity ID</label>
                                            <input type="text" disabled={true} className="form-control" id="activityID" defaultValue={editingActivity.work_id} readOnly style={{ color: 'black' }} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="date" className="form-label">Date</label>
                                            <input type="text" className="form-control" id="date" defaultValue={editingActivity.date} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="weather" className="form-label">Weather</label>
                                            <select className="form-select" id="weather" defaultValue={editingActivity.weather}>
                                                <option value="Sunny">Sunny</option>
                                                <option value="Clear">Clear</option>
                                                <option value="Cloudy">Cloudy</option>
                                                <option value="Rainy">Rainy</option>
                                                <option value="Overcast">Overcast</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="workType" className="form-label">Work Type</label>
                                            <input type="text" className="form-control" id="workType" defaultValue={editingActivity.work_type} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="workgroupID" className="form-label">Workgroup ID</label>
                                            <input type="text" className="form-control" id="workgroupID" defaultValue={editingActivity.workgroup_id} />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Save Changes</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <br></br>
                {/* add new activity form */}
                <div className="card">
                    <div className="row g-3" style={{ padding: "20px" }}>
                        <h3 style={{ paddingTop: "20px" }}>Add New Activity</h3>
                        <form id="addNewActivity" onSubmit={handleFormSubmit}>
                            <div className="mb-3">
                                <label htmlFor="activityID" className="form-label">Activity ID</label>
                                <input type="text" disabled={true} defaultValue={`W0324-${zeroPad((activities.length + 1), 4)}`} className="form-control" id="activityID" ></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="date" className="form-label">Date</label>
                                <input type="date" className="form-control" id="date" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="weather" className="form-label">Weather</label>
                                <select className="form-select" id="weather">
                                    <option value="Sunny">Sunny</option>
                                    <option value="Clear">Clear</option>
                                    <option value="Cloudy">Cloudy</option>
                                    <option value="Rainy">Rainy</option>
                                    <option value="Overcast">Overcast</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="workType" className="form-label">Work Type</label>
                                <input type="text" className="form-control" id="workType" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="workgroupID" className="form-label">Workgroup ID</label>
                                <input type="text" className="form-control" id="workgroupID" />
                            </div>
                            <button type="submit" className="btn btn-primary">Add Activity</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
