const INPUT = {
    department: 'produce',
    categories: ['fruit', 'vegetables'],
    bins: [
      {
        category: 'fruit',
        type: 'apples',
        price: 1.99,
        unit: 'pound',
        quantity: 232,
      },
      {
        category: 'fruit',
        type: 'bananas',
        price: 0.19,
        unit: 'each',
        quantity: 112,
      },
      {
        category: 'vegetables',
        type: 'carrots',
        price: 1.29,
        unit: 'bag',
        quantity: 57,
      },
      {
        category: 'vegetables',
        type: 'tomatoes',
        price: 0.53,
        unit: 'each',
        quantity: 0,
      },
    ],
  }

  const OUTPUT = {
    department: 'produce',
    choices: [
      {
        kind: 'apples',
        priceDisplayLabel: '$1.99 per pound',
        available: 232,
      },
      {
        kind: 'bananas',
        priceDisplayLabel: '$0.19 per each',
        available: 112,
      },
      {
        kind: 'carrots',
        priceDisplayLabel: '$1.29 per bag',
        available: 57,
      },
    ],
  }

const convertObject = (input) => {
    let output = {}
    let choices = [];
    output.department = input.department;

    input.bins.forEach((value) => {
        let obj = {}
        if (value.type === 'bananas' || value.type === 'apples' || value.type === 'carrots') {
            obj.kind = value.type;
            obj.priceDisplayLabel = `$${value.price} per ${value.unit}`;
            obj.available = value.quantity;
            choices.push(obj)
        }
        
    })
    output.choices = choices;
    return output;
}

console.log(convertObject(INPUT))