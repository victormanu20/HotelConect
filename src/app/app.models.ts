export class Property {
    constructor(public id: number,
                public title: string, 
                public desc: string,
                public propertyType: string,
                public propertyStatus: string[], 
                public city: string,
                public zipCode: string[],
                public neighborhood: string[],
                public street: string[],
                public location: Location,
                public formattedAddress: string,
                public features: string[],
                public featured: boolean,
                public singleRoomPrice: number,
                public doubleRoomPrice: number,
                public bedrooms: number,
                public bathrooms: number,
                public garages: number,
                public area: Area,
                public yearBuilt: number,
                public ratingsCount: number,
                public ratingsValue: number,
                public additionalFeatures: AdditionalFeature[],
                public gallery: Gallery[],
                public plans: Plan[],
                public videos: Video[],
                public published: string,
                public lastUpdate: string,
                public views: number){ }
} 

export interface Person {
    full_name: string;
    date_birth: string;
    gender: string;
    type_document: string;
    num_document: string;
    email: string;
    phone: string;
    full_name_emergency?: string;
    phone_emergency?: string;
}

export interface Reservation {
    id: number;
    booking_date: string;
    start_date: string;
    end_date: string;
    total_price: string;
    number_persons: number;
    number_rooms: number;
    id_hotel: Property;
    persons_reservation: Person[];
    reserve_person: Person;
}

export class Area {
    constructor(public id: number, 
                public value: number,
                public unit: string){ }
}

export class AdditionalFeature {
    constructor(public id: number, 
                public name: string,
                public value: string){ }
}

export class Location {
    constructor(public propertyId: number,
                public lat: number,
                public lng: number){ }
}

export class Price {
    public sale: number;
    public rent: number;
}


export class Gallery {
    constructor(public id: number, 
                public small: string,
                public medium: string,
                public big: string){ }
}

export class Plan {
    constructor(public id: number, 
                public name: string,
                public desc: string,
                public area: Area,
                public rooms: number,
                public baths: number,
                public image: string){ }
}

export class Video {
    constructor(public id: number, 
                public name: string,
                public link: string){ }
}

export class Pagination {
    constructor(public page: number,
                public perPage: number,
                public prePage: number,
                public nextPage: number,
                public total: number,
                public totalPages: number){ }
}

