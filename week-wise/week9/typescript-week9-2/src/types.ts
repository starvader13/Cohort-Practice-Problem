
// Union
type greetArg = number | string

// intersection
type Employee1 = {
    name: string;
    startDate: Date;
}

interface Manager1 {
    name: string;
    department: string;
}

type TechLead = Employee1 & Manager1;

const t: TechLead = {
    name: "ashutosh",
    startDate: new Date(),
    department: "engineer"
};
