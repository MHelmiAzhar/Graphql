import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  category: string;

  @Field(() => Float)
  price: number;

  @Field(() => Int)
  stock: number;
}
