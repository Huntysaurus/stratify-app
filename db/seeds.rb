require 'faker'

# vendors
Vendor.create(name: "The Coffee co.", id:1)
Vendor.create(name: "6-Bucks Coffee", id:2)
Vendor.create(name: "Cameras R us!", id:3)
Vendor.create(name: "Appliance Central", id:4)
Vendor.create(name: "High-Tech Products", id:5)

# coffees
10.times do
    Product.create(
        name:Faker::Coffee.blend_name,
        category:'beverage',
        price:Faker::Number.decimal(l_digits: 2),
        image:'https://media.gettyimages.com/photos/roasted-coffee-beans-in-burlap-bag-picture-id163443804?k=20&m=163443804&s=612x612&w=0&h=hwa1i6wwQMZwpv2SsoePkfj6NxiQw6PAD949LMl_H1M=',
        description:Faker::Coffee.notes,
        vendor_id: 1
    )
end

10.times do
    Product.create(
        name:Faker::Coffee.blend_name,
        category:'beverage',
        price:Faker::Number.decimal(l_digits: 2),
        image:'https://media.gettyimages.com/photos/roasted-coffee-beans-in-burlap-bag-picture-id163443804?k=20&m=163443804&s=612x612&w=0&h=hwa1i6wwQMZwpv2SsoePkfj6NxiQw6PAD949LMl_H1M=',
        description:Faker::Coffee.notes,
        vendor_id: 2
    )
end

# appliances
10.times do
    Product.create(
        name:Faker::Appliance.equipment,
        category:'appliance',
        price:Faker::Number.decimal(l_digits: 3),
        image:'https://media.gettyimages.com/photos/household-appliances-kitchen-picture-id168343692?k=20&m=168343692&s=612x612&w=0&h=FeixO9ZqM9g18iNl8N0ki50jKUrxgL9_px15wFcdKjg=',
        description:Faker::Lorem.sentences(number: 1),
        vendor_id: 4
    )
end

10.times do
    Product.create(
        name:Faker::Appliance.equipment,
        category:'appliance',
        price:Faker::Number.decimal(l_digits: 3),
        image:'https://media.gettyimages.com/illustrations/quadcopter-drone-illustration-illustration-id1088373176?k=20&m=1088373176&s=612x612&w=0&h=mhBjw-Lh7g9hWOlEdUiM1bWrFkOhzf-IN4uqZTqRrjw=',
        description:Faker::Lorem.sentences(number: 1),
        vendor_id: 5
    )
end

# cameras
10.times do
    Product.create(
        name:"#{Faker::Camera.brand} #{Faker::Camera.model}",
        category:'camera',
        price:Faker::Number.decimal(l_digits: 3),
        image:'https://media.gettyimages.com/photos/black-digital-slr-camera-in-a-white-background-picture-id185278433?k=20&m=185278433&s=612x612&w=0&h=_JuLqy0HIaC3dq9V0x2xhh_VpUsHMSjAmZJmWMTBK3c=',
        description:Faker::Lorem.sentences(number: 1),
        vendor_id: 3
    )
end
