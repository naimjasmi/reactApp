//models
import { Work_Group, Activity } from "./models";

//mockdata
export const WORKGROUPS = [
    new Work_Group(1, 'WG001', 'Excavator Team 1', 'Major excavation work'), 
    new Work_Group(2, 'WG002', 'Excavator Team 2', 'Minor excavation work'), 
    new Work_Group(3, 'WG003', 'Fiber Optic Installation Team 1', 'Fiber optic team to lay fo cables'), 
    new Work_Group(4, 'WG004', 'Tester Team 1', 'Tester team to test fo connections')
];

export const ACTIVITIES = [
    new Activity(1, 'W0324-0001', '2024-03-01', 'Clear', 'Excavation', 'WG001'),
    new Activity(2, 'W0324-0002', '2024-03-01', 'Overcast', 'Excavation', 'WG002'),
    new Activity(3, 'W0324-0003', '2024-03-02', 'Rainy', 'FO Installation', 'WG003')
];

