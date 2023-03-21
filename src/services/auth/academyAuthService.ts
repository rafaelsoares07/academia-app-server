import { Academy } from "@prisma/client";
import bcrypt from "bcrypt";
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { createAcademy, findAcademyByEmail } from "../../repositories/auth/academyAuthRepository";
dotenv.config()
export type TypeAcademyData = Omit<Academy, 'id'>;

console.log(process.env.KEYPASS)

export async function signup(data: TypeAcademyData) {
    const AcademyExist = await findAcademyByEmail(data.email)
    if (AcademyExist) {
        return "Academia já existe"
    }

    const passwordEncrip = bcrypt.hashSync(data.password, 10)
    data.password = passwordEncrip
    data.accessLevelId = 1
    const result = createAcademy(data)

    return result
}

export async function signin(data: any) {
    const academyExist = await findAcademyByEmail(data.email)
    if (!academyExist) {
        return "Academia ainda não tem cadastro no nosso site"
    }
    const passwordValid = bcrypt.compareSync(data.password, academyExist.password)
    if (!passwordValid) {
        return "Suas credencias sao invalidas"
    }


    const academy = {
        name: academyExist.name,
        email: academyExist.email,
        cidade: academyExist.cidade,
        accessLevel: academyExist.AccessLevel?.name
    }

    const userId = academyExist.id.toString()
    const accessLevel = academyExist.AccessLevel?.name

    const payload = {
        userId,
        accessLevel
    }

    const token = jwt.sign(payload, process.env.KEYPASS || "YXZ25678910")

    return {
        token,
        academy
    }
}

