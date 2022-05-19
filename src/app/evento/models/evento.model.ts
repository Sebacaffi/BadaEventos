export class Event {
    state: string;
    booking_date: string;
    site: string; //Site?
    address: string; //Site?
    capacity: number;
    banquetery: string; //Banquetery?
    event_type: string;
    group: string; //Age
    music: string;
    entertainment: string;
    value: number;
}

export class Customer {
    event: Event;
    name: string;
    last_name: string;
    email: string;
    rut: string;
    phone: string;
    address: string;
    city: string;
}

//adulto, infantil, juvenil, mixto
export class Age {
    id: number;
    items: string;
}

export class Banquetery {
    id: number;
    items: string;
    value: number;
}

export class Site {
    id: number;
    site: string;
    address: string;
    capacity: number;
    value: number;
}

export class Music {
    id: number;
    items: string;
    value: number;
}

export class Entertainment {
    id: number;
    items: string;
    value: number;
}