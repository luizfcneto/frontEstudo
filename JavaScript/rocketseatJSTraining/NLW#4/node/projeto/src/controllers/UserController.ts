import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";
import * as yup from "yup";
import { AppError } from "../errors/AppError";

class UserController {
  async create(request: Request, response: Response) {
    const { name, email } = request.body;

    // Validação utilizando o yup:
    const schema = yup.object().shape({
      name: yup.string().required().required("Nome é obrigatório"),
      email: yup.string().required("Email é obrigatório"),
    });

    // Uma forma
    // if (!(await schema.isValid(request.body))) {
    //   return response.status(400).json({
    //     error: "Validation Failed",
    //   });
    // }

    // Segunda forma:
    try {
      schema.validate(request.body, { abortEarly: false });
    } catch (error) {
      throw new AppError(error);
      //   return response.status(400).json({
      //     error: error,
      //   });
    }

    const usersRepository = getCustomRepository(UserRepository);

    // SELECT * FROM USERS WHERE EMAIL = "EMAIL"
    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) {
      return response.status(400).json({
        mensagem: "Error. User already exists!",
      });
    }

    const user = usersRepository.create({
      name,
      email,
    });
    await usersRepository.save(user);
    return response.status(201).json(user);
  }
}

export { UserController };
