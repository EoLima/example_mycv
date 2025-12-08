import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
