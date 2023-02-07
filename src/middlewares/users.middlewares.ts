import { NextFunction, Response, Request } from 'express';

// REFATORAR!

const usernameToCreate = async (req : Request, res : Response, next: NextFunction) => {
  const { username } = req.body;
  if (!username) return res.status(400).json({ message: '"name" is required' });
  if (typeof username !== 'string') {
    return res.status(422).json({ message: '"username" must be a string' });
  }
  if (username.length < 4) {
    return res.status(422)
      .json({ message: '"username" length must be at least 3 characters long' });
  }
  return next();
};

const passwordToCreate = async (req : Request, res : Response, next: NextFunction) => {
  const { password } = req.body;
  if (!password) return res.status(400).json({ message: '"name" is required' });
  if (typeof password !== 'string') { 
    return res.status(422).json({ message: '"password" must be a string' });
  }
  if (password.length < 9) {
    return res.status(422)
      .json({ message: '"password" length must be at least 8 characters long' });
  }
  return next();
};

const levelToCreate = async (req : Request, res : Response, next: NextFunction) => {
  const { level } = req.body;
  if (!level) return res.status(400).json({ message: '"level" is required' });
  if (typeof level !== 'string') { 
    return res.status(422).json({ message: '"level" must be a number' });
  }
  if (level.length < 1) {
    return res.status(422)
      .json({ message: '"level" length must be greater than or equal to 1' });
  }
  return next();
};

const vocationToCreate = async (req : Request, res : Response, next: NextFunction) => {
  const { vocation } = req.body;
  if (!vocation) return res.status(400).json({ message: '"vocation" is required' });
  if (typeof vocation !== 'string') { 
    return res.status(422).json({ message: '"vocation" must be a string' });
  }
  if (vocation.length < 3) {
    return res.status(422)
      .json({ message: '"vocation" length must be at least 3 characters long' });
  }
  return next();
};

export default {
  usernameToCreate,
  passwordToCreate,
  levelToCreate,
  vocationToCreate,
};