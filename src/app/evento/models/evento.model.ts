export class Prevent {
    id: number; // ID tipo evento
    site: Site;
    event_catering: Catering;
    group: Age;
    music: Music;
    event_entertainment: Entertainment;
    value: number;
    type: string; // nombre tipo evento
    urlBase: string;
    image: string;
    event_drinks: Drinks;
    description: string
}

export class Age {
    id: number;
    ages: string;
}

export class Catering {
    id: number;
    items: string;
    value: number;
    urlBase: string;
    description: string;
    description2: string;
    eventType: number;
}

export class Site {
    id: number;
    items: string;
    address: string;
    capacity: number;
    value: number;
    urlBase: string;
}

export class Music {
    id: number;
    items: string;
    value: number;
    urlBase: string;
    description: string;
    description2: string;
}

export class Entertainment {
    id: number;
    items: string;
    urlBase: string;
    value: number;
    description: string;
    description2: string;
    eventType: number;
}

export class Drinks {
    id: number;
    items: string;
    value: number;
    urlBase: string;
    description: string;
    description2: string;
    eventType: number;
}

//clases para uso posterior
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
