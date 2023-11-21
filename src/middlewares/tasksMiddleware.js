function validateFieldTitle(req, res, next) {
  const { body } = req;

  if (body.title === undefined) {
    return res.status(400).json({ message: 'The filed "title" is required' });
  }

  if (body.title === '') {
    return res.status(400).json({ message: 'title cannot be empty' });
  }

  next();
}

function validateFieldStatus(req, res, next) {
  const { body } = req;

  if (body.status === undefined) {
    return res.status(400).json({ message: 'The filed "status" is required' });
  }

  if (body.status === '') {
    return res.status(400).json({ message: 'status cannot be empty' });
  }

  next();
}

export default { validateFieldTitle, validateFieldStatus };
