import { Column, Entity } from 'typeorm'
import { MonthlyTemperatureRange as IMonthlyTemperatureRange } from '@peashoot/types'
import { Temperature } from '../values/temperature'

@Entity()
export class MonthlyTemperatureRange extends IMonthlyTemperatureRange {
	@Column()
	month!: number

	@Column(() => Temperature)
	min!: Temperature
	@Column(() => Temperature)
	max!: Temperature
}
