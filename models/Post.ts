import Category from "./Category";
import {AllowNull, BelongsTo, Column, DataType, ForeignKey, Model, Table, Unique} from "sequelize-typescript";
import {PostAttributes} from "../interfaces";

@Table({
    timestamps: true
})
export default class Post extends Model<PostAttributes> {
    @Unique(true)
    @AllowNull(false)
    @Column({
        type: DataType.TEXT
    })
    title!: string

    @AllowNull(false)
    @Column({
        type: DataType.TEXT
    })
    description!: string

    @ForeignKey(() => Category)
    @Column({
        type: DataType.INTEGER
    })
    categoryId!: number

    @BelongsTo(() => Category)
    category!: Category
}
