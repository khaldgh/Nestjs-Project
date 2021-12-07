import { User } from "src/users/user.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"

@Entity()
export class Place {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;

    @Column()
    make: string;

    @Column()
    model: string;

    @Column()
    year: number;

    @Column()
    lat: number;

    @Column()
    long: number;

    @Column()
    milage: number;

    @Column({ default: false})
    approved: boolean;

    @ManyToOne(() => User, (user) => user.places)
    user: User;
}