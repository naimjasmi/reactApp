export class Work_Group {
    constructor (id, workgroup_id, workgroup_name, workgroup_desc) {
        this.id = id;
        this.workgroup_id = workgroup_id;
        this.workgroup_name = workgroup_name;
        this.workgroup_desc = workgroup_desc;
    }
}

export class Activity {
    constructor(no, work_id, date, weather, work_type, workgroup_id) {
        this.no = no;
        this.work_id = work_id;
        this.date = date;
        this.weather = weather;
        this.work_type = work_type;
        this.workgroup_id = workgroup_id;
    }
}


