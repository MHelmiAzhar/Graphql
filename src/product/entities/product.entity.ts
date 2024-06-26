import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  category: string;

  @Field((type) => Float)
  price: number;

  @Field((type) => Int)
  stock: number;
}
