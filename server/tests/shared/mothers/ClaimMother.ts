import Visitor from "../../../src/domain/entities/visitor.entity";
import Category from "../../../src/domain/entities/category.entity";
import Claim from "../../../src/domain/entities/claim.entity";

export class ClaimMother {

  static withoutLikes(visitor: Visitor, category: Category): Claim {

    return Claim.create(
      visitor,
      'un titulo',
      'descripcion',
      category,
      'una ubicacion'
    )
  }

  static withLikes(visitor: Visitor, category: Category, strings: string[]) {

    const claim =Claim.create(
      visitor,
      'un titulo',
      'descripcion',
      category,
      'una ubicacion'
    )
    strings.forEach((id ) => {

      claim.addLike(id)
    })

    return claim;
  }
}