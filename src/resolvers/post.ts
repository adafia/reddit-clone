import { Resolver, Query, Ctx, Arg, Int } from 'type-graphql';
import { Post } from '../entities/Post';
import { MyContext } from '../types';

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  posts(@Ctx() { em }: MyContext): Promise<Post[]> {
    return em.find(Post, {});
  }

  @Query(() => [Post])
  post(
    @Arg('id', () => Int) id: number,
    @Ctx() { em }: MyContext): Promise<Post[]> {
    return em.find(Post, {});
  }
}
