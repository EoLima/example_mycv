import { User } from 'src/users/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  Price: number;

  @Column()
  Make: string;

  @Column()
  Model: string;

  @Column()
  Year: number;

  @Column()
  Longitude: number;

  @Column()
  Latitude: number;

  @Column()
  Mileage: number;

  @ManyToOne(() => User, (user) => user.reports)
  user: User;
}
