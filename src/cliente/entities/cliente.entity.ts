import { User } from 'src/user/entities/user.entity';
import { Entity } from 'typeorm';

@Entity()
export class Cliente extends User {}
