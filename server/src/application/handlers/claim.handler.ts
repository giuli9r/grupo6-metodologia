import {VisitorRepository} from '../../infrastructure/repositories/visitor.repository';
import  {Claim} from '../../domain/entities/claim.entity';
import {CreateClaimCommand} from '../commands/claim/create.claim.command';
import Visitor from '../../domain/entities/visitor.entity';


class CreateClaimHandler{
    private visitorRepository: VisitorRepository;


    public constructor(
        visitorRepository: VisitorRepository
    ){
        this.visitorRepository;
    }

    private checkPin(pin: string): boolean {
        // Verifica que el PIN tenga exactamente 6 dígitos numéricos.
        return /^\d{6}$/.test(pin);
      }
    
    private validatePin(enteredPin: string, visitor: Visitor): boolean {
        // Verifica que el PIN ingresado coincida con el PIN del visitante.
        //Declarar el PIN en entities 
        return enteredPin === visitor.pin; 
    }
    
    public async execute(visitorPin: string, claimDetails: string): Promise<void> {
    // Buscar el visitante por su PIN
    const visitor = this.visitorRepository.findByPin(visitorPin);
        
    if (!visitor) {
    throw new Error('Visitante no encontrado o PIN incorrecto.');
    }

    // Validar el formato del PIN ingresado
    if (!this.checkPin(visitorPin)) {
    throw new Error('El PIN debe tener 6 dígitos numéricos.');
    }

    // Validar que el PIN ingresado coincida con el PIN del visitante
    if (!this.validatePin(visitorPin, visitor)) {
    throw new Error('PIN incorrecto.');
    }
    
    const claim = Claim.create(
      visitor,
      visitorPin,
    );
  }
}
export default new CreateClaimHandler(
  VisitorRepository,
);
