import { useState } from "react";
import { WORKGROUPS } from "./data/mockdata";
import { Work_Group } from "./data/models";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faUsers, faPhone, faCubes } from '@fortawesome/free-solid-svg-icons';

export default function Workgroups() {
    const [workgroup, setWorkgroup] = useState(WORKGROUPS);
    const [editingWorkgroup, setEditingWorkgroup] = useState(null);
    const zeroPad = (num, places) => String(num).padStart(places, '0')

    function handleFormSubmit(ev) {
        ev.preventDefault();
        var newid = workgroup.length + 1;
        var newwg = new Work_Group(
            newid,
            ev.target.workgroupID.value,
            ev.target.workgroupName.value,
            ev.target.workgroupDesc.value
        );

        setWorkgroup([...workgroup, newwg]);
        // reset form lepas tekan submit
        ev.target.reset();
    }

    //function nak delete workgroup
    function deleteWorkgroup(id) {
        if (window.confirm(`Are you sure you want to delete workgroup ${id}?`)) {
            const updatedWorkgroups = workgroup.filter(wg => wg.workgroup_id !== id);
            setWorkgroup(updatedWorkgroups);
        }
    }

    function handleEditClick(wg) {
        setEditingWorkgroup(wg);
    }

    function handleEditFormSubmit(ev) {
        ev.preventDefault();
        const updatedWorkgroup = new Work_Group(
            editingWorkgroup.workgroup_id,
            ev.target.workgroupID.value,
            ev.target.workgroupName.value,
            ev.target.workgroupDesc.value
        );

        const updatedWorkgroups = workgroup.map(wg =>
            wg.workgroup_id === updatedWorkgroup.workgroup_id ? updatedWorkgroup : wg
        );

        //keluar pop up edit confimation
        if (window.confirm(`Are you sure you want to edit workgroup?`)) {
            setWorkgroup(updatedWorkgroups);
        }

        // tutup edit form
        setEditingWorkgroup(null); // Close the edit form
    }

    return (
        <div>
            <div className="topnav">
                <a href="/"> <FontAwesomeIcon icon={faHome} /> Home</a>
                <a className="active" href="/workgroup"> <FontAwesomeIcon icon={faUsers} /> Workgroup</a>
                <a href="/contact"><FontAwesomeIcon icon={faPhone} /> Contact</a>
                <a href="/activity"><FontAwesomeIcon icon={faCubes} /> Activity</a>
            </div>
            <div className="container">
                <header style={{ padding: '12px', textAlign: 'center' }}><h1>WORKGROUPS</h1></header>
                <div className="row g-3">
                    {workgroup.map(wg => (
                        <div className="col-md-6" key={wg.workgroup_id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{wg.workgroup_name}</h5>
                                    <h6 className="card-subtitle ">ID: {wg.workgroup_id}</h6>
                                    <p className="card-text">{wg.workgroup_desc}</p>
                                    <button className="btn btn-primary" onClick={() => handleEditClick(wg)}>Edit</button>
                                    <button className="btn btn-danger mx-1" onClick={() => deleteWorkgroup(wg.workgroup_id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/*pop up form nak edit card*/}
                {editingWorkgroup && (
                    <div className="modal" tabIndex="-1" role="dialog" style={{ display: "block" }}>
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Edit Workgroup</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setEditingWorkgroup("")}></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleEditFormSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="workgroupID" className="form-label">Workgroup ID</label>
                                            <input type="text" disabled={true} className="form-control" id="workgroupID" defaultValue={editingWorkgroup.workgroup_id} readOnly style={{ color: 'black' }} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="workgroupName" className="form-label">Workgroup Name</label>
                                            <input type="text" className="form-control" id="workgroupName" defaultValue={editingWorkgroup.workgroup_name} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="workgroupDesc" className="form-label">Workgroup Description</label>
                                            <input type="text" className="form-control" id="workgroupDesc" defaultValue={editingWorkgroup.workgroup_desc} />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Save Changes</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                <br></br>
                {/*add new workgroup form*/}
                <div className="card">
                    <div className="row g-3" style={{ padding: "20px" }}>
                        <h3 style={{ paddingTop: "20px" }}>Add New Workgroup</h3>
                        <form id="addNewWorkGroup" onSubmit={handleFormSubmit}>
                            <div className="mb-3">
                                <label htmlFor="wg_ID" className="form-label">Workgroup ID</label>
                                <input type="text" disabled={true} defaultValue={`WG${zeroPad((workgroup.length + 1), 3)}`} className="form-control" id="workgroupID" ></input>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="workgroupName" className="form-label">Workgroup Name</label>
                                <input type="text" className="form-control" id="workgroupName" />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="workgroupDesc" className="form-label">Workgroup Description</label>
                                <input type="text" className="form-control" id="workgroupDesc" />
                            </div>
                            <button type="submit" className="btn btn-primary">Add Workgroup</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
