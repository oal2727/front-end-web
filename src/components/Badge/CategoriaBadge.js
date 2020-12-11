import React from "react";

const BadgeCategory = ({ categorias }) => {
  return (
    <div class="categoria-organism">
      <span class="categoria-title"> Categorias de Platos</span>
      <div class="container-categoria">
        {categorias.map((item, index) => {
          return (
            <div key={item.IDCATEGORIA} class="categoria-badge">
              {item.DESCRIPCION}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default BadgeCategory;
