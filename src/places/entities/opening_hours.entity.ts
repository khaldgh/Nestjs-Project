import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, OneToOne } from "typeorm"
import { Place } from "./place.entity";

@Entity()
export class OpeningHours {

    @PrimaryGeneratedColumn()
    opening_hours_id: number;

    @Column()
    Sunday: string;

    @Column()
    Monday: string;

    @Column()
    Tuesday: string;

    @Column()
    Wednesday: string;

    @Column()
    Thursday: string;

    @Column()
    Friday: string;

    @Column()
    Saturday: string;

    @OneToOne(() => Place, (place) => place.opening_hours_id)
    place: Place;

}