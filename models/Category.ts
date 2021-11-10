import Post from "./Post";
import {AllowNull, Column, DataType, HasMany, Model, Table, Unique} from "sequelize-typescript";
import {CategoryAttributes} from "../interfaces";

@Table({
    timestamps: true
})
export default class Category extends Model<CategoryAttributes> {
    @Unique(true)
    @AllowNull(false)
    @Column({
        type: DataType.TEXT
    })
    name!: string;

    @HasMany(() => Post)
    posts!: Post[];
}