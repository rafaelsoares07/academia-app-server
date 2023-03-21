import { Client } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createClient, findClientByEmail } from '../../repositories/auth/clientAuthRepository';
export type TypeClientData = Omit<Client, 'id'>;

export async function signup(data: TypeClientData, academyId: number) {
    const clientExist = await findClientByEmail(data.email)
    if (clientExist) {
        return "Cliente da academia já existe"
    }
    data.password = data.cpf

    const passwordEncrip = bcrypt.hashSync(data.password, 10)
    data.password = passwordEncrip
    data.accessLevelId = 3
    data.academyId = academyId
    const result = createClient(data)

    return result
}

export async function signin(data: any) {
    const clientExist = await findClientByEmail(data.email)
    if (!clientExist) {
        return "CLiente nao foi cadastrrado ainnda"
    }
    const passwordValid = bcrypt.compareSync(data.password, clientExist.password)
    if (!passwordValid) {
        return "Suas credencias sao invalidas"
    }

    const client = {
        name: clientExist.name,
        email: clientExist.email,
        accessLevel: clientExist.AccessLevel?.name
    }

    const userId = clientExist.id.toString()
    const accessLevel = clientExist.AccessLevel?.name

    const payload = {
        userId,
        accessLevel
    }

    const token = jwt.sign(payload, process.env.KEYPASS || "YXZ25678910")

    return {
        token,
        client
    }
}