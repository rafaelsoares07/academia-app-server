import { Instructor } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createInstructor, findInstructorByEmail } from '../../repositories/auth/instructorAuthRepository';
export type TypeInstructorData = Omit<Instructor, 'id'>;

export async function signup(data: TypeInstructorData, academyId: number) {
    const instructorExist = await findInstructorByEmail(data.email)
    if (instructorExist) {
        return "Instrutor da academia já existe"
    }

    data.password = data.cpf

    const passwordEncrip = bcrypt.hashSync(data.password, 10)
    data.password = passwordEncrip
    data.accessLevelId = 2
    data.academyId = academyId
    const result = await createInstructor(data)

    return result
}

export async function signin(data: any) {
    const instructorExist = await findInstructorByEmail(data.email)
    if (!instructorExist) {
        return "Instructor nao foi cadastrrado ainnda"
    }
    const passwordValid = bcrypt.compareSync(data.password, instructorExist.password)
    if (!passwordValid) {
        return "Suas credencias sao invalidas"
    }

    const instructor = {
        name: instructorExist.name,
        email: instructorExist.email,
        accessLevel: instructorExist.AccessLevel?.name
    }

    const userId = instructorExist.id.toString()
    const accessLevel = instructorExist.AccessLevel?.name

    const payload = {
        userId,
        accessLevel
    }

    const token = jwt.sign(payload, process.env.KEYPASS || "YXZ25678910")

    return {
        token,
        instructor
    }
}